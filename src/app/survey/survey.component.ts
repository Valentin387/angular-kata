import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  isAndroid: boolean = /android/i.test(navigator.userAgent);
  surveyId: string | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract surveyId from route parameters
    this.surveyId = this.route.snapshot.paramMap.get('id');

    if (!this.surveyId) {
      this.errorMessage = 'Invalid survey ID';
      return;
    }

    if (this.isAndroid) {
      // Attempt to open deep link
      this.redirectToDeepLink(this.surveyId);
      // Fallback to Play Store after 1 second if deep link fails
      setTimeout(() => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.kata3.encuestasapp';
      }, 1000);
    } else {
      this.errorMessage = 'Please open this link on an Android device with EncuestasApp installed.';
    }
  }

  private redirectToDeepLink(surveyId: string): void {
    window.location.href = `myapp://survey/${surveyId}`;
  }
}