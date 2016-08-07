Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth'

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :groups, except: [:new, :edit]
  end

end