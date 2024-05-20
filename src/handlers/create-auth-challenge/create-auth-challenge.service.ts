import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateAuthChallengeService {
  async handler(event) {
    if (event.request.challengeName === 'CUSTOM_CHALLENGE') {
      // Gere um código de verificação
      const verificationCode = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');

      // Envie o código de verificação (SMS, e-mail, etc.)
      // ...

      // Armazene o código de verificação na sessão
      event.response.publicChallengeParameters = {};
      event.response.privateChallengeParameters = { verificationCode };
      event.response.challengeMetadata = `CODE-${verificationCode}`;
    }

    return event;
  }
}
