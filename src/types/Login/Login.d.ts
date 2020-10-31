export type MODE_TYPE = 'LOGIN' | 'REGISTER'

export interface VerificationFormProps {
    username: string
    callback: (res) => void
}
