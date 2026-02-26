import { css } from '@emotion/css';
import { ReactElement, useId } from 'react';
import { useForm } from 'react-hook-form';

import { GrafanaTheme2 } from '@grafana/data';
import { selectors } from '@grafana/e2e-selectors';
import { t } from '@grafana/i18n';
import { Button, Input, Field, useStyles2 } from '@grafana/ui';

import { PasswordField } from '../PasswordField/PasswordField';

import { FormModel } from './LoginCtrl';

interface Props {
  children: ReactElement;
  onSubmit: (data: FormModel) => void;
  isLoggingIn: boolean;
  passwordHint: string;
  loginHint: string;
}

export const LoginForm = ({ children, onSubmit, isLoggingIn, passwordHint, loginHint }: Props) => {
  const styles = useStyles2(getStyles);
  const usernameId = useId();
  const passwordId = useId();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormModel>({ mode: 'onChange' });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          label={t('login.form.username-label', 'Email or username')}
          invalid={!!errors.user}
          error={errors.user?.message}
        >
          <Input
            {...register('user', { required: t('login.form.username-required', 'Email or username is required') })}
            className={styles.loginInput}
            id={usernameId}
            autoFocus
            autoCapitalize="none"
            placeholder={loginHint || t('login.form.username-placeholder', 'email or username')}
            data-testid={selectors.pages.Login.username}
          />
        </Field>
        <Field
          label={t('login.form.password-label', 'Password')}
          invalid={!!errors.password}
          error={errors.password?.message}
        >
          <PasswordField
            {...register('password', { required: t('login.form.password-required', 'Password is required') })}
            className={styles.loginInput}
            id={passwordId}
            autoComplete="current-password"
            placeholder={passwordHint || t('login.form.password-placeholder', 'password')}
          />
        </Field>
        <Button
          type="submit"
          data-testid={selectors.pages.Login.submit}
          className={styles.submitButton}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? t('login.form.submit-loading-label', 'Logging in...') : t('login.form.submit-label', 'Log in')}
        </Button>
        {children}
      </form>
    </div>
  );
};

export const getStyles = (theme: GrafanaTheme2) => {
  return {
    wrapper: css({
      width: '100%',
      paddingBottom: theme.spacing(2),
    }),

    submitButton: css({
      justifyContent: 'center',
      width: '100%',
      border: 'none',
      color: '#fff',
      background: theme.isDark
        ? 'linear-gradient(92deg, #3772f6 0%, #5f7dff 52%, #8968ee 100%)'
        : 'linear-gradient(92deg, #2f67dd 0%, #5877ec 52%, #7a5fda 100%)',
      boxShadow: theme.isDark ? '0 10px 22px rgba(57, 102, 232, 0.3)' : '0 8px 18px rgba(71, 107, 202, 0.22)',
      '&:hover, &:focus': {
        color: '#fff',
        background: theme.isDark
          ? 'linear-gradient(92deg, #3f7afc 0%, #6886ff 52%, #946ff4 100%)'
          : 'linear-gradient(92deg, #3970e6 0%, #6180f0 52%, #8469df 100%)',
      },
    }),
    loginInput: css({
      '& input': {
        background: theme.isDark ? 'rgba(13, 22, 36, 0.66)' : 'rgba(255, 255, 255, 0.82)',
        borderColor: theme.isDark ? 'rgba(108, 150, 228, 0.3)' : 'rgba(104, 132, 192, 0.35)',
      },
      '& input::placeholder': {
        color: theme.colors.text.secondary,
      },
      '& input:hover': {
        borderColor: theme.isDark ? 'rgba(122, 165, 244, 0.44)' : 'rgba(91, 124, 198, 0.45)',
      },
      '& input:focus': {
        background: theme.isDark ? 'rgba(14, 24, 40, 0.74)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: theme.isDark ? 'rgba(122, 165, 244, 0.55)' : 'rgba(91, 124, 198, 0.55)',
      },
    }),

    skipButton: css({
      alignSelf: 'flex-start',
    }),
  };
};
