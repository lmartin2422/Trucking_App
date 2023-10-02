import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';  
// DomSanitizer helps to prevent attackers from injecting malicious client side scripts into web pages (Cross Site Scripting)
// SafeUrl is used alongside DomSanitizer to tell the DOM that a URL is safe

@Component({
  selector: 'app-blast-carriers',
  templateUrl: './blast-carriers.component.html',
  styleUrls: ['./blast-carriers.component.css']
})
export class BlastCarriersComponent {
  openOutlook(): void {
    console.log("Button Clicked");
    const emailSubject = "Submit Rate for Lane [Location 1] to [Location 2]";
    const emailBody = `
    <pre>
      <html>
        <body>
          <p>Hello [Carrier], </p>
          <p> Please submit a rate for the lane [Location 1] to [Location 2]. </p>
          <p> Click the button below to submit your rate: </p>
          <p><a href="[Rate Submission Link]" style="background-color: #4CAF50; color: white; padding: 10px 15px; text-decoration: none;">Submit Rate</a></p>
        </body>
      </html>
    </pre>
    `;
    const mailToUrl = `mailTo:?subject=${encodeURI(emailSubject)}&body=${encodeURI(emailBody)}`;
    window.location.href = mailToUrl;
  }

}
