export interface IsJohnDoe {
  add (params: IsJohnDoe.Input): Promise<IsJohnDoe.Output>
}

export namespace IsJohnDoe {
  export type Input = { name: string }
  export type Output = boolean
}

export class IsJohnDoeService implements IsJohnDoe {
  async add ({ name }: IsJohnDoe.Input): Promise<IsJohnDoe.Output> {
    return name === 'John Doe'
  }
}
