describe("The angular home controller", function(){

	beforeEach(module('chatApp'));
	var crazy = 0;
	describe('home controller', function(){
		var $controller;

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		describe("$scope.no", function(){
			console.log();
			var $scope, controller;
			beforeEach(inject(function($rootScope){
				$scope = $rootScope.$new();
				controller = $controller('HomeCtrl', {$scope: $scope});
			}));

			it('has the value hi', function(){
				expect($scope.no).toBe('hi');
			});

			it('yo should be set to default mate', function(){
				expect(controller.yo).toBe('mate');
				expect(controller.yo).toBeDefined();
			});

			it('should be an empty array', function(){
				expect($scope.rooms.length).toBe(0);
			});

			it('can added to rooms', function(){
				$scope.rooms.push($scope.no);

				expect($scope.rooms[0]).toBe('hi');
			});
		});
	});

	describe('reverse filter', function(){
		var reverse;
		beforeEach(inject(function($filter){
			reverse = $filter('reverse');
		}));

		it('should reverse string', function(){
			expect(reverse('hello')).toBe('olleh');
		});

		it('should reverse number', function(){
			expect(reverse('678')).toBe('876');
		});
	});

	describe('tester directive', function(){
		var $compile;
		var $scope;
		var element;
		beforeEach(inject(function(_$compile_, $rootScope){
			$compile = _$compile_;
			$scope = $rootScope.$new();
			element = $compile("<tester rude='bug'>furry rabbit</tester>")($scope);
			$scope.$digest();
		}));

		it('should compile the corret string', function(){

			expect(element.html()).toContain('hello there');

			element.scope().bar = 'bug';
			expect(element.scope().bar).toBe('bug');

		});

	});


	describe('boo factory', function(){
		var boo;
		var random;
		var val = 0;
		beforeEach(inject(function(_boo_){
			boo = _boo_;
			spyOn(boo, 'moo').and.callThrough();
			random = boo.moo();
			val = 1;
		}));

		it('should compile the corret string', function(){

			expect(boo.cow(val)).toBe('1wut thewut the');

		});

		it('should compile the corret string', function(){

			expect(boo.cow(val)).toBe('1wut thewut the');

		});

		it('should register as being called', function(done){
			setTimeout(function(){
				expect(boo.weed()).toBe('baba');
				done();

			}, 20);
			
		});

	});

	describe('rando ctrl', function(){
		var $scope, $controller, randoCtrl, broot;
		beforeAll(function(){
			crazy++;
		});
		afterAll(function(){
			crazy = 0;
		});
		beforeEach(inject(function($rootScope, _$controller_, _boo_){
			$scope = $rootScope.$new();
			$controller = _$controller_;
			broot = _boo_;
			spyOn(broot, 'weed').and.callThrough();

			randoCtrl = $controller('randoCtrl', {$scope: $scope, boo: broot});
		}));

		it('should return default hello value', function(){
			expect($scope.hello).toBe('hey there');
		});
		it('should execute function properly', function(){
			expect(broot.weed).not.toHaveBeenCalled();
			expect($scope.yodawg()).toBe('baba!');
			expect(broot.weed).toHaveBeenCalled();
		});

		it('should corrent stub Math.random', function(){
			spyOn(Math,'random').and.callFake(function(){
				return 1;
			});
			expect($scope.hi()).toEqual(1);
			Math.random.and.stub().and.callThrough();
			console.log($scope.hi());
			expect($scope.hi()).not.toEqual(1);
		});

		it('should corrent stub Math.random', function(){
			//Math.random = 1;
			expect($scope.hi()).not.toEqual(1);
		});

		it('should return the date', function(){
			spyOn(Date, 'now').and.callFake(function(){
				return	3;
			});
			expect($scope.time()).toBe(3);
			expect(Date.now).toHaveBeenCalled();
		});

		it('should retun noo', function(){
			expect(crazy).toBe(1);	
		});
	});

	describe('it work for coo', function(){
		var coo;
		
		beforeEach(inject(function(_coo_){
			coo = _coo_;		
		}));
		it('should retun noo', function(){
			//expect(crazy).toBe(1);	
			expect(coo.moo()).toBe('nooo');
		});

		it('should retun noo', function(){
			//expect(crazy).toBe(1);	
			expect(coo.moo()).toBe('nooo');
		});

		it('should retun noo', function(){
			//expect(crazy).toBe(1);	
			expect(coo.moo()).toBe('nooo');
		});
	});


	describe('async test', function(){
		var coo;
		
		beforeEach(function(done){
			setTimeout(function(){
				done();
			}, 3000);
		});
		it('should retun noo', function(){
			//expect(crazy).toBe(1);	
			expect('nooo').toBe('nooo');
		});

		it('should retun noo', function(done){
			//expect(crazy).toBe(1);	
			done();
		});
	});



});