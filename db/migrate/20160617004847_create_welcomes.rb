class CreateWelcomes < ActiveRecord::Migration
  def change
    create_table :welcomes do |t|
      t.string :index
      t.string :show
      t.string :new
      t.string :edit

      t.timestamps null: false
    end
  end
end
