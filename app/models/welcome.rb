class Welcome < ActiveRecord::Base
	  def self.first_name
    order(:first_name)
  end
end
