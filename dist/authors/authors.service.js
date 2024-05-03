"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
let AuthorsService = class AuthorsService {
    constructor() {
        this.authors = [];
    }
    create(author) {
        this.authors.push(author);
        return author;
    }
    findAll() {
        return this.authors;
    }
    findOne(id) {
        return this.authors.find(authors => authors.id === id);
    }
    update(id, updatedAuthor) {
        const index = this.authors.findIndex(authors => authors.id === id);
        this.authors[index] = updatedAuthor;
        return updatedAuthor;
    }
    remove(id) {
        const index = this.authors.findIndex(authors => authors.id === id);
        if (index !== -1) {
            this.authors.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)()
], AuthorsService);
//# sourceMappingURL=authors.service.js.map