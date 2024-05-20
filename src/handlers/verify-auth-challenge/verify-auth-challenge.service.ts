import { Injectable } from '@nestjs/common';

@Injectable()
export class VerifyAuthChallengeService {
  async handler(event: any) {
    // Implement your custom verification logic here
    // For example, you might check if the provided answer matches the expected answer
    const expectedAnswer =
      event.request.privateChallengeParameters.secretLoginCode;
    const providedAnswer = event.request.challengeAnswer;

    if (providedAnswer === expectedAnswer) {
      event.response.answerCorrect = true;
    } else {
      event.response.answerCorrect = false;
    }

    return event;
  }
}
