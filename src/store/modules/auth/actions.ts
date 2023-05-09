import { SignInProps } from '@interfaces/account/SignInProps';
import { SignUpProps } from '@interfaces/account/SignUpProps';
import { FailureProps } from '@interfaces/auth/FailureProps';
import { SignInSuccessProps } from '@interfaces/auth/SignInSuccessProps';

export function signInAction({ user, password }:SignInProps) {
    return {
        type: '@auth/SIGNIN',
        payload: {
            user, password,
        },
    };
}

export function signInSuccessAction({ name, email }:SignInSuccessProps) {
    return {
        type: '@auth/SIGNIN_SUCCESS',
        payload: {
            name, email,
        },
    };
}

export function signOutAction() {
    return {
        type: '@auth/SIGNOUT',
    };
}

export function signOutSuccessAction() {
    return {
        type: '@auth/SIGNOUT_SUCCESS',
    };
}

export function failedAction({ message }: FailureProps) {
    return {
        type: '@auth/FAILED',
        payload: {
            message,
        },
    };
}

export function alertAction({ message }: any) {
    return {
        type: '@auth/ALERT',
        payload: {
            message,
        },
    };
}

export function failedCheckedAction() {
    return {
        type: '@auth/FAILED_CHECKED',
    };
}

export function signUpAction({ fullName, user, password }:SignUpProps) {
    return {
        type: '@auth/SIGNUP',
        payload: {
            fullName, user, password,
        },
    };
}

export function signUpSuccessAction() {
    return {
        type: '@auth/SIGNUP_SUCCESS',
    };
}

export function forgotPasswordAction({ user }:any) {
    return {
        type: '@auth/FORGOT_PASSWORD',
        payload: {
            user,
        },
    };
}
