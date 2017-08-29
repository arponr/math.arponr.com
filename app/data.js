'use strict';

const $ = require('jquery');

const Data = {
    lists: [{
        title: 'Notes \& Exposition',
        entries: [{
            title: 'The Adams spectral sequence',
            date: '2017-03-01',
            desc: 'Talk notes. Motivates and explains the construction of the classical Adams spectral sequence for mod p cohomology.',
            url: '/files/adams-ss.pdf',
        }, {
            title: 'Motivating infinity-categorical thinking',
            date: '2017-01-23',
            desc: 'Talk notes. Describes a few simple ways in which higher category theory can be used to think about classical homotopy theory.',
            url: '/files/inftycats-motivation.pdf',
        }, {
            title: 'Characters in global equivariant homotopy theory',
            date: '2015-03-23',
            desc: 'My undergraduate thesis. On the generalized character theory of Hopkins-Kuhn-Ravenel and Stapleton.',
            url: '/files/senior-thesis.pdf',
        }, {
            title: 'Vector fields and the J-homomorphism',
            date: '2014-05-09',
            desc: 'Final paper. On Adams\'s work on counting vector fields on spheres and the J-homomorphism.',
            url: '/files/vfields.pdf',
        }, {
            title: 'Defining the cotangent complex',
            date: '2013-12-17',
            desc: 'Final paper. On Quillen\'s application of the theory of model categories to defining a homology theory for algebras.',
            url: '/files/quillen-cotangent.pdf',
        }, {
            title: 'The Dold-Kan correspondence',
            date: '2013-10-26',
            desc: 'Talk notes. A proof of the titular result, and a couple of quick consequences.',
            url: '/files/doldkan.pdf',
        }],
    }],

    init: function() {
        console.log('App initialized.');

        var tmpl = require('views/list');
        for (var i = 0; i < Data.lists.length; i++) {
            var html = tmpl(Data.lists[i]);
            $('.page__content').append(html);
        }
    }
};

module.exports = Data;
