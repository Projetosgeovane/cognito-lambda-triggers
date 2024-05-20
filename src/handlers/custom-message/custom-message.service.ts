import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomMessageService {
  async handler(event) {
    const code = event.request.codeParameter;
    const cpf = event.request.userAttributes['custom:cpf'];

    // Personalize a mensagem de verificação
    event.response.smsMessage = `Seu código de verificação é ${code}`;
    event.response.emailSubject = 'Código de verificação';
    event.response.emailMessage = `Seu código de verificação é ${code}`;

    return event;
  }
}
