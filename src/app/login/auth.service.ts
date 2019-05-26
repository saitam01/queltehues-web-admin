import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlY2lubzEiLCJwYXNzd29yZCI6InF1ZWx0ZWh1ZXMyMDE5IiwiYXV0aCI6IlJPTEVfVVNFUiJ9.CQNmkK5IDyApqCm-YQ4nhsLFifTcl1r4VbM-AQx7TpA';
  }
}
