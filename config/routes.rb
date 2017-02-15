Rails.application.routes.draw do
  devise_for :users
  root to: 'application#angular'
  resources :events, defaults: {'format' => 'json'}, only: [:create, :index, :show, :edit, :update, :destroy] do
    member do
      put '/likes' => 'events#likes'
    end
  end

end
