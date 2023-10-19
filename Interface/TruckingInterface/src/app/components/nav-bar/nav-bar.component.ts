import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AccountInfo, InteractionStatus } from '@azure/msal-browser';
import { PopupRequest } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';

// Microsoft Graph API endpoint
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

// Defining the type for the user's profile
type ProfileType = {
  givenName?: string;
  surname?: string;
};

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  // Boolean variable to control the login display
  loginDisplay = false;

  // Profile object to store user information
  profile!: ProfileType;

  // Boolean variable to check if the app is running in an iframe
  isFrame = false;

  // Subject for managing the component's lifecycle
  private readonly _destroying$ = new Subject<void>();

  // Boolean variable to control the display of the account switcher
  showAccountSwitcher = false;

  // Array to store user accounts
  accounts: AccountInfo[] = [];

  // URL for switching accounts
  switchAccountsUrl = 'https://login.microsoftonline.com/common/oauth2/logout';

  // Constructor with necessary injections
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private broadcastService: MsalBroadcastService,
    private authService: MsalService,
    private http: HttpClient
  ) {}

  // Implementation of the ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }

  // Implementation of the ngOnInit lifecycle hook
  ngOnInit(): void {
    // Checking if the app is running in an iframe
    this.isFrame = window !== window.parent && !window.opener;

    // Fetching the user profile
    this.getProfile();

    // Handling the authentication progress
    this.broadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });

    // Updating the user accounts
    this.updateAccounts();
  }

  // Method to toggle the account switcher
  switchAccount(): void {
    this.showAccountSwitcher = !this.showAccountSwitcher;
  }

  // Method to switch to a specific account
  switchToAccount(account: AccountInfo): void {
    this.authService.instance.setActiveAccount(account);
    this.showAccountSwitcher = false;
    this.setLoginDisplay();
  }

  // Method to update the user accounts
  private updateAccounts(): void {
    this.accounts = this.authService.instance.getAllAccounts();
  }

  // Method to fetch the user's profile from the Microsoft Graph API
  getProfile() {
    this.http.get<ProfileType>(GRAPH_ENDPOINT).subscribe(profile => {
      this.profile = profile;
    });
  }

  // Method to handle the login process
  login(): void {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as PopupRequest).subscribe({
        next: (result) => {
          console.log(result);
          this.setLoginDisplay();
        },
        error: (error) => console.log(error)
      });
    } else {
      this.authService.loginPopup().subscribe({
        next: (result) => {
          console.log(result);
          this.setLoginDisplay();
        },
        error: (error) => console.log(error)
      });
    }
  }

  // Method to handle the logout process
  logout(): void {
    this.authService.logoutPopup({
      mainWindowRedirectUri: '/'
    });
  }

  // Method to set the login display based on the available accounts
  setLoginDisplay(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
}
