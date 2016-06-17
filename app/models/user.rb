class User < ActiveRecord::Base
	def self.by_created
		order(:name)
	end
end
