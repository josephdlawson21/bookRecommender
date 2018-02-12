Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:show, :create]
  resources :books, only:[:show, :create]

  GET '/users/:id/books', to: 'user#getbooks'
  POST '/user/:id/books/:id', to: 'user#postbooks'


end
