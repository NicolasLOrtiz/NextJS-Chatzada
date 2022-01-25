export const ResponseErrorMessages = (code: number): string => {
  switch (code) {
    case 400:
      return 'Erro nos dados enviados'
    case 401:
      return 'Sem autorização'
    case 403:
      return 'Não foi possível realizar a operação'
    case 404:
      return 'Não foi encontrado o recurso solicitado'
    case 405:
      return 'Método não permitido'
    default:
      return 'Erro desconhecido'
  }
}
