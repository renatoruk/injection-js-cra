import {Injectable, ReflectiveInjector} from "injection-js";

@Injectable()
class Http {}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
class Service {
    constructor(private http: Http) {}
}

try {
    const injector = ReflectiveInjector.resolveAndCreate([Http, Service]);
    console.log(injector.get(Service));
} catch (e) {
    console.error(e)
}

