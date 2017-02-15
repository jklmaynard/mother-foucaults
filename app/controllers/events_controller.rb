class EventsController < ApplicationController
  respond_to :json

  def index
    respond_with Event.all
  end

  def create
    respond_with Event.create(event_params)
  end

  def show
    respond_with Event.find(params[:id])
  end

  def edit
    respond_with Event.find(params[:id])
  end

  def update
    event = Event.find(params[:id])
    event.update(event_params)
    respond_with event
  end

  def destroy
    respond_with Event.destroy(params[:id])
  end

  def likes
    event = Event.find(params[:id])
    event.increment!(:likes)

    respond_with event
  end
  private
  def event_params
    params.require(:event).permit(:title, :description, :date)
  end
end
