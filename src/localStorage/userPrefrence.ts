import storage from './storage';

export enum UserPreferenceKeys {
  LANGUAGE = 'app_language',
  ISLOGGEDIN = 'app_login',
  ISPARTIALLOGGEDIN = 'app_partialloggedin',
  IS_EMPLOYEE = 'app_Employee',
  IS_EMPLOYER = 'app_Employer',
  LOGIN_DATA = 'login_data'
}

class UserPreference {
  private _prefStorage;

  private language: string | undefined = undefined;
  private isLoggedin: boolean | undefined;
  private isEmployee: boolean | undefined;
  private isEmployer: boolean | undefined;
  private isPartialLoggedin: boolean | undefined;
  private loginData: any | undefined;

  constructor() {
    this._prefStorage = storage;
  }

  public async setAllPreference() {
    this.language = await this._prefStorage.getString(UserPreferenceKeys.LANGUAGE);
    this.isLoggedin = await this._prefStorage.getBoolean(UserPreferenceKeys.ISLOGGEDIN);
    this.isEmployee = await this._prefStorage.getBoolean(UserPreferenceKeys.IS_EMPLOYEE);
    this.isEmployer = await this._prefStorage.getBoolean(UserPreferenceKeys.IS_EMPLOYER);
    this.isPartialLoggedin = await this._prefStorage.getBoolean(
      UserPreferenceKeys.ISPARTIALLOGGEDIN
    );
    this.loginData = await this._prefStorage.getObject(UserPreferenceKeys.LOGIN_DATA);
  }

  clearAll(): void {
    try {
      this._prefStorage.clearAll();
    } catch (error) {
      console.log('Clear All Error', error);
    }
  }

  clearAllBut(keys: UserPreferenceKeys[]): void {
    try {
      this._prefStorage.clearAllBut(keys);
    } catch (error) {
      console.log('Clear All Error', error);
    }
  }

  getAppLanguage(): string | undefined {
    return this.language;
  }

  getisLoggedin(): boolean | undefined {
    return this.isLoggedin;
  }

  getisPartialLoggedin(): boolean | undefined {
    return this.isPartialLoggedin;
  }

  getIsEmployee(): boolean | undefined {
    return this.isEmployee;
  }

  getisEmployer(): boolean | undefined {
    return this.isEmployer;
  }

  getLoginData(): any | undefined {
    return this.loginData;
  }

  getUserId(): any | undefined {
    return this.loginData?.userID;
  }
  getUserFullName(): any | undefined {
    return this.loginData?.firstName + ' ' + this.loginData?.lastName;
  }

  setAppLanguage(value: string) {
    let trimmedString = value.substring(0, 2);
    this._prefStorage.set(UserPreferenceKeys.LANGUAGE, trimmedString);
  }

  setIsLoggedIn(value: boolean) {
    this._prefStorage.set(UserPreferenceKeys.ISLOGGEDIN, value);
    this.isLoggedin = value;
  }

  setIsPartialLoggedIn(value: boolean) {
    this._prefStorage.set(UserPreferenceKeys.ISPARTIALLOGGEDIN, value);
    this.isPartialLoggedin = value;
  }

  setIsEmployee(value: boolean) {
    this._prefStorage.set(UserPreferenceKeys.IS_EMPLOYEE, value);
    this.isEmployee = value;
    this.isEmployer = !value;
  }

  setIsEmployer(value: boolean) {
    this._prefStorage.set(UserPreferenceKeys.IS_EMPLOYER, value);
    this.isEmployer = value;
    this.isEmployee = !value;
  }

  setLoginData(value: any) {
    this._prefStorage.set(UserPreferenceKeys.LOGIN_DATA, value);
    this.loginData = value;
  }
}

const userPreference = new UserPreference();

export default userPreference;
