class UsersController < ApplicationController
  before_action :find_user

  def show
    render json: @user, status: 200
  end

  def create

  end

  def get_books
    
  end

  def post_books

  end

private
def find_user
  @user = Users.find_by(id: params[:id])
end

def user_params
  params.permit(:name)
end

end
