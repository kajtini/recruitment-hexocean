import DishForm from "./components/Form/DishForm";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white font-primary">
            <div className="max-w-7xl px-4 w-full z-10">
                <DishForm />
            </div>
        </div>
    );
}

export default App;
