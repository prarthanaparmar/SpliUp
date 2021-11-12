import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_kPUUDx6Lu",
  ClientId: "626on0cu4p9kgr8djipln1taea",
};

export default new CognitoUserPool(poolData);
