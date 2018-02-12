Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:show, :create]
  # resources :books, only:[:show, :create]

  get '/users/:id/books', to: 'users#getBooks'
  post '/users/:id/books', to: 'users#postBook'


end
