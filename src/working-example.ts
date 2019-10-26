import {Injectable, ReflectiveInjector, Inject} from "injection-js";

@Injectable()
class Http {}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
class Service {
    /**
     * this is required for injection to work
     */
    static get parameters() {
        return [new Inject(Http)]
    }
    constructor(private http: Http) {}
}

const injector = ReflectiveInjector.resolveAndCreate([Http, Service]);

console.log(injector.get(Service));
