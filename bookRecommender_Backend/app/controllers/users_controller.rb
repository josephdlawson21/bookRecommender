class UsersController < ApplicationController
  before_action :find_user

  def show
    render json: @user, status: 200
  end

  def create
    @user = User.find_or_create_by(name: params[:name])
    render json: @user, status: 200
  end

  def getBooks
    @books = @user.books
    render json: @books, status: 200
  end

  def postBook
    @book = Book.create(googleId: params[:googleId])
    @user.books << @book
    render json: @user.books, status: 200

  end

  private

  def find_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.permit(:name, :id)
  end

end
