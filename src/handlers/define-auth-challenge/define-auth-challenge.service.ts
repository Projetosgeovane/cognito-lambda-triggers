import { Injectable } from '@nestjs/common';

@Injectable()
export class DefineAuthChallengeService {
  async handler(event) {
    if (event.request.session.length === 0) {
      // Primeiro desafio
      event.response.issueTokens = false;
      event.response.failAuthentication = false;
      event.response.challengeName = 'CUSTOM_CHALLENGE';
    } else if (
      event.request.session.length === 1 &&
      event.request.session[0].challengeResult === true
    ) {
      // Se o desafio for passado
      event.response.issueTokens = true;
      event.response.failAuthentication = false;
    } else {
      // Se o desafio falhar
      event.response.issueTokens = false;
      event.response.failAuthentication = true;
    }

    return event;
  }
}
