class DynamicPetsController < ApplicationController
  layout nil
  layout 'application', except: 'view'
  
  def main
  end

  def fish
    render partial: 'favorite_pets/fish_details'
  end

  def cats
    render partial: 'favorite_pets/cat_details'
  end

  def dogs
    render partial: 'favorite_pets/dog_details'
  end
end
