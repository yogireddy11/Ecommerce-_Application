import { faker } from '@faker-js/faker';

export function generateUser() {
    return {
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        phone: faker.phone.number(),
        fullName :faker.person.fullName(),
        subject :faker.lorem.words(3),
        message : faker.lorem.sentence(3)

    };
}