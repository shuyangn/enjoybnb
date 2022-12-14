class Api::ReservationsController < ApplicationController

    def index
        @reservations = User.find(params[:user_id]).reservations
        @rooms = Room.all
        # params[:user_id] ? @reservations = Reservation.where(user_id: params[:user_id].to_i) : Reservation.all
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)


        if @reservation.save
            @user = @reservation.user
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        render :show
    end


    def reservation_params
        params.require(:reservation).permit(:user_id, :room_id, :num_guests, :check_in, :check_out)
    end

end
