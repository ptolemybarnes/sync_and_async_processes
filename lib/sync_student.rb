class Student
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def calculate(expression)
    sleep(rand(2..4))
    puts "#{name}: I've got the answer! I'll just return it..."
    return expression
  end

end

