class EventsController < ApplicationController
  respond_to :json

  def index
    respond_with Event.all
  end

  def create
    event = Event.create(event_params)
    event.update(image: decode_base64)
    respond_with event
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
    params.require(:event).permit(:title, :description, :date, :time)
  end
  def decode_base64
    decoded_data = Base64.decode64(params[:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end
end
