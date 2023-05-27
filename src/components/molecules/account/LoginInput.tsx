import { AccountBox } from '@atoms/account/AccountBox';
import { AccountInput } from '@atoms/account/AccountInput';
import React from 'react';

function LoginInput() {
  return (
    <div>
      <AccountBox>
        <AccountInput placeholder="이메일" />
        <AccountInput placeholder="비밀번호" type="password" noTopBorder />
      </AccountBox>
    </div>
  );
}

export default LoginInput;
