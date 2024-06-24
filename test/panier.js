import { expect } from 'chai';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('', { url: "https://example.org/" });
global.window = window;
global.document = window.document;
global.localStorage = window.localStorage;

describe('LocalStorage Test', function() {
    beforeEach(function() {
        localStorage.setItem('panier', 'testValue');
    });

    afterEach(function() {
        localStorage.clear();
    });

    it('devrait supprimer un élément du localStorage', function() {
        expect(localStorage.getItem('panier')).to.equal('testValue');

        localStorage.removeItem('panier');

        expect(localStorage.getItem('panier')).to.be.null;
    });
});