import { Injectable } from '@nestjs/common';

@Injectable()
export class PreSignUpService {
  async handler(event) {
    const userAttributes = event.request.userAttributes;

    // Verifique se o CPF já existe no sistema
    const cpf = userAttributes['custom:cpf'];

    // Implementar lógica para verificar se o CPF já está registrado

    // Se o CPF não estiver registrado, permita o registro
    event.response.autoConfirmUser = true;

    return event;
  }
}
