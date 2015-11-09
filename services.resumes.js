(function() {
	"use strict";

	var _ = window._;
	var rahilResume = {

		name : 'Rahil Sharma',
        rahil_image : 'http://rahilsharma.tk/images/profilepic.jpg',

		address : {
			street1: '397 Housing Board ',
			street2: 'Colony',
			city: 'Bhopal',
			state: 'MP',
			zip: '462038'
		},

		phoneNumber: '8978377336',

		email: 'rahilsharma2009@vit.ac.in',

		github: 'github.com/rs91092',

		blog: 'rahilsharma.tk',



		//Skills Entered will come in front of the skills list. others added at the end

		skills : [
			"JavaScripts",
			"HTML5/CSS3",
			"Mongo DB",
			"Java",
			"C#"
		],

		projectsHeader : '<h5>Project History</h5>',

		projectsFooter : '<strong class="text-muted">Freelance work can be discussed during interview.</strong>',

		//List your projects below
		projects : [
			{
				company : 'Bank Of America',
				projectName : 'AGTI ScreenCapture Utility',
				dates: '3/15 - Present',
				skillsUsed : [
					'JavaScript',
					'React',
					'NodeJS',
				],
				tags : [
					'System Architecture',
					'AJAX',
				],
				highlights : [
					'I implemented 4 key features in the tool',
					'Capture Screenshots using global keyword / mouse hooks',
					'Capture Screenshot using HotKeys / ShortCut key',
					'Excel/Word Support using OpenXML library , Capture Screenshots of Active Window / or when window changes.'
				]
			},
			{
				company : 'Bank Of America',
				projectName : 'ExACT – Extrapolatory and Automation Certification Tool',
				dates: '9/14 - 9/15',
				skillsUsed : [
					'JavaScript',
					'React',
					'NodeJS','Vb.net','C#'
				],
				tags : [
					'System Architecture'
				],
				highlights : [
					' My resposibilities included design,development,unit testing and integration with other systems.',
					'Some key features implemented by me were using Global low level keyboard and mouse hooks to design screenshot and ',
					'video playback utility , designed bulk upload utility for HPs QC using OTA library.',

				]
			},
			{
				company : 'Bank Of America',
				projectName : 'AGTI Auto Data Provisioning Tool',
				dates: '8/13 - 9/14',
				skillsUsed : [
					'JavaScript',
					'AngularJS',
					'c#','mvc','IIS Server'
				],
				tags : [
					'System Architecture'
				],
				highlights : [
					'I worked as Full Stack Developer , I designed complete website as a single page app from scratch ',
					'also implemented soap based services for the backend',
					'designed a push notification based system for backend jobs using SignalR',
					'designed schedulers for IIS',
					'also used various jquery grids and data representation libraries like highcharts	and raphael for front end.'
				]
			},
			{
				company : 'Bank Of America',
				projectName : 'Travel-Flag',
				dates: '12/14 - 12/14',
				skillsUsed : [
					'JavaScript',
					'HTML5/CSS'
				],
				tags : [
					'AJAX'
				],
				highlights : [
					'I worked as Front End Developer',
					'My main responsibility was to integrate foundation framework with existing design and make website responsive.'
				]
			},



		],

		education : [
			{
				degree : 'BTech in Computer Science',
				school : "VIT University (Vellore Institute Of Technology",
				gradDate : 'May, 2013',
				comments : '8.48 CGPA'
			},{
				degree :'High School PCM',
				school:'Delhi Public School',
				gradDate : "May,2009",
				comments :"88%"
			}
		],
		certification : [
			{
				degree : 'Oracle Certified Java Professional',
				school : "Oracle Corp.",
				gradDate : 'May, 2014',
				comments : '92%'
			},{
				degree :'Microsoft Certified Professional',
				school:'Microsoft',
				gradDate : "May,2015",
				comments :"77%"
			}
		]
	};

	window.angular.module("rahilresume").factory('rahilResumeService', ['$q', function ($q) {
		function getrahilResume() {
			var defer = $q.defer();
			setTimeout(function () {
				var skills = {};
				_.each(rahilResume.projects, function (project) {
					_.each(project.skillsUsed, function (aSkill) {
						skills[aSkill] = (skills[aSkill] || 0) + 1;
					});
					if (project.tags) {
						_.each(project.tags, function (aTag) {
							skills[aTag] = true;
						});
					}
				});
				_.each(rahilResume.skills, function (aPredefinedSkill) {
					skills[aPredefinedSkill] = false;
				});
				rahilResume.activeSkills = {};
				_.each(Object.keys(skills), function (aSkill) {
					if (skills.hasOwnProperty(aSkill)) {
						if (skills[aSkill]) {
							rahilResume.skills.push(aSkill);
						}
						rahilResume.activeSkills[aSkill] = true;
					}
				});
				defer.resolve(rahilResume);
			}, 0);
			return defer.promise;
		}
		function togglingSkillActive(skill) {
			if (skill) {
				rahilResume.activeSkills[skill] = !rahilResume.activeSkills[skill];
			}
		}

		function containsActiveSkills (skillSet) {
			return _.reduce(skillSet, function(memo, skill) {
				return memo || rahilResume.activeSkills[skill];
			}, false);
		}

		function skillIsActiveornot (skill) {
			return rahilResume.activeSkills[skill] === true;
		}

		return {
			getrahilResume : getrahilResume,
			togglingSkillActive: togglingSkillActive,
			skillIsActiveornot: skillIsActiveornot,
			containsActiveSkills: containsActiveSkills
		};
	}]);
}).call();
