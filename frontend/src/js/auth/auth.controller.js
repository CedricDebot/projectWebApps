class AuthController {

  constructor(User, $state) {
    'ngInject';

    this.title = $state.current.title;
    this._User = User;
    this._$state = $state;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this.isSubmitting = false;
        this._$state.go('app.profile', {djName: res.data.djName});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
   }
}

export default AuthController;
