    class Animal
    {
        public void Eat()
        {
            Console.WriteLine("Animal is eating.");
        }

        public void Sleep()
        {
            Console.WriteLine("Animal is sleeping.");
        }
    }

    
    interface IAnimalActions
    {
        void Move();
        void MakeSound();
    }


    class Dog : Animal, IAnimalActions
    {
        public void Move()
        {
            Console.WriteLine("Dog is walking.");
        }

        public void MakeSound()
        {
            Console.WriteLine("Dog is barking.");
        }
    }