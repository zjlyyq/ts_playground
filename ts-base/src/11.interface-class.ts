interface Auto {
    run: () => void
}

class AutoClass implements Auto {
    run() {

    }
    private name: string
}

interface MyAuto extends AutoClass{

}

class Test extends AutoClass implements MyAuto {
    run() {

    }
}