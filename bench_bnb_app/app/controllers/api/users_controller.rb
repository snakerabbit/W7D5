class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      render :show
    else
      render :json, @user.errors.full_messages
    end
  end

  # def show
  #   @user = User.find_by_id(params[:id])
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
