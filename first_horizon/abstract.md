    abstract class Animal
    {
   
        public abstract void MakeSound();


        public void Eat()
        {
            Console.WriteLine("Animal is eating.");
        }


        public void Sleep()
        {
            Console.WriteLine("Animal is sleeping.");
        }
    }

    class Dog : Animal
    {
        // Implementation of the abstract MakeSound method for a dog
        public override void MakeSound()
        {
            Console.WriteLine("Dog is barking.");
        }
    }


So I can override the MakeSound method.
I can not instantiate abstract classes.
