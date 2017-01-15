Rails.application.routes.draw do
  root to: 'application#angular'
  resources :events, defaults: {'format' => 'json'}, only: [:create, :index, :show] do
    member do
      put '/likes' => 'events#likes'
    end
  end

end
