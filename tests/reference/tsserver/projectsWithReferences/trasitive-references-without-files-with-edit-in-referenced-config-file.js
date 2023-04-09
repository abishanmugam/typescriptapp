Info 0    [00:00:39.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/a/tsconfig.json]
{"compilerOptions":{"composite":true}}

//// [/user/username/projects/myproject/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"references":[{"path":"../a"}]}

//// [/user/username/projects/myproject/c/tsconfig.json]
{"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"references":[{"path":"../b"}]}

//// [/user/username/projects/myproject/a/index.ts]
export class A {}

//// [/user/username/projects/myproject/b/index.ts]
import {A} from '@ref/a';
export const b = new A();

//// [/user/username/projects/myproject/c/index.ts]
import {b} from '../b';
import {X} from "@ref/a";
b;
X;

//// [/user/username/projects/myproject/refs/a.d.ts]
export class X {}
export class A {}


Info 1    [00:00:40.000] Search path: /user/username/projects/myproject/c
Info 2    [00:00:41.000] For info: /user/username/projects/myproject/c/index.ts :: Config file name: /user/username/projects/myproject/c/tsconfig.json
Info 3    [00:00:42.000] Creating configuration project /user/username/projects/myproject/c/tsconfig.json
Info 4    [00:00:43.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 5    [00:00:44.000] Config: /user/username/projects/myproject/c/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/c/index.ts"
 ],
 "options": {
  "baseUrl": "/user/username/projects/myproject/c",
  "paths": {
   "@ref/*": [
    "../refs/*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/c",
  "configFilePath": "/user/username/projects/myproject/c/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/b",
   "originalPath": "../b"
  }
 ]
}
Info 6    [00:00:45.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c 1 undefined Config: /user/username/projects/myproject/c/tsconfig.json WatchType: Wild card directory
Info 7    [00:00:46.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c 1 undefined Config: /user/username/projects/myproject/c/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:47.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json
Info 9    [00:00:48.000] Config: /user/username/projects/myproject/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/b/index.ts"
 ],
 "options": {
  "composite": true,
  "baseUrl": "/user/username/projects/myproject/b",
  "paths": {
   "@ref/*": [
    "../*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/b",
  "configFilePath": "/user/username/projects/myproject/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/a",
   "originalPath": "../a"
  }
 ]
}
Info 10   [00:00:49.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 11   [00:00:50.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Config: /user/username/projects/myproject/b/tsconfig.json WatchType: Wild card directory
Info 12   [00:00:51.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Config: /user/username/projects/myproject/b/tsconfig.json WatchType: Wild card directory
Info 13   [00:00:52.000] Config: /user/username/projects/myproject/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a/index.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/a/tsconfig.json"
 }
}
Info 14   [00:00:53.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 15   [00:00:54.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Config: /user/username/projects/myproject/a/tsconfig.json WatchType: Wild card directory
Info 16   [00:00:55.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Config: /user/username/projects/myproject/a/tsconfig.json WatchType: Wild card directory
Info 17   [00:00:56.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 18   [00:00:57.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 19   [00:00:58.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 20   [00:00:59.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 21   [00:01:00.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/index.ts 500 undefined WatchType: Closed Script info
Info 22   [00:01:01.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/index.ts 500 undefined WatchType: Closed Script info
Info 23   [00:01:02.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs/a.d.ts 500 undefined WatchType: Closed Script info
Info 24   [00:01:03.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 25   [00:01:04.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 26   [00:01:05.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 27   [00:01:06.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 28   [00:01:07.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 29   [00:01:08.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 30   [00:01:09.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 31   [00:01:10.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 32   [00:01:11.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 33   [00:01:12.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 34   [00:01:13.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 35   [00:01:14.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a/index.ts Text-1 "export class A {}"
	/user/username/projects/myproject/b/index.ts Text-1 "import {A} from '@ref/a';\nexport const b = new A();"
	/user/username/projects/myproject/refs/a.d.ts Text-1 "export class X {}\nexport class A {}"
	/user/username/projects/myproject/c/index.ts SVC-1-0 "import {b} from '../b';\nimport {X} from \"@ref/a\";\nb;\nX;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../a/index.ts
	  Imported via '@ref/a' from file '../b/index.ts'
	../b/index.ts
	  Imported via '../b' from file 'index.ts'
	../refs/a.d.ts
	  Imported via "@ref/a" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info 36   [00:01:15.000] -----------------------------------------------
Info 37   [00:01:16.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 37   [00:01:17.000] 	Files (5)

Info 37   [00:01:18.000] -----------------------------------------------
Info 37   [00:01:19.000] Open files: 
Info 37   [00:01:20.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 37   [00:01:21.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
Info 37   [00:01:25.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/nrefs :: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 38   [00:01:26.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/nrefs :: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 39   [00:01:31.000] FileWatcher:: Triggered with /user/username/projects/myproject/b/tsconfig.json 1:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 40   [00:01:32.000] Scheduled: /user/username/projects/myproject/c/tsconfig.json
Info 41   [00:01:33.000] Scheduled: *ensureProjectForOpenFiles*
Info 42   [00:01:34.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b/tsconfig.json 1:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Before checking timeout queue length (2) and running
//// [/user/username/projects/myproject/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../nrefs/*"]}},"references":[{"path":"../a"}]}

//// [/user/username/projects/myproject/nrefs/a.d.ts]
export class X {}
export class A {}


PolledWatches::
/user/username/projects/myproject/c/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/c/tsconfig.json: *new*
  {}
/user/username/projects/myproject/b/tsconfig.json: *new*
  {}
/user/username/projects/myproject/a/tsconfig.json: *new*
  {}
/user/username/projects/myproject: *new*
  {}
/user/username/projects/myproject/b/index.ts: *new*
  {}
/user/username/projects/myproject/a/index.ts: *new*
  {}
/user/username/projects/myproject/refs/a.d.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/c: *new*
  {}
/user/username/projects/myproject/b: *new*
  {}
/user/username/projects/myproject/a: *new*
  {}
/user/username/projects/myproject/refs: *new*
  {}

Info 43   [00:01:35.000] Running: /user/username/projects/myproject/c/tsconfig.json
Info 44   [00:01:36.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json
Info 45   [00:01:37.000] Config: /user/username/projects/myproject/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/b/index.ts"
 ],
 "options": {
  "composite": true,
  "baseUrl": "/user/username/projects/myproject/b",
  "paths": {
   "@ref/*": [
    "../nrefs/*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/b",
  "configFilePath": "/user/username/projects/myproject/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/a",
   "originalPath": "../a"
  }
 ]
}
Info 46   [00:01:38.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/nrefs/a.d.ts 500 undefined WatchType: Closed Script info
Info 47   [00:01:39.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/nrefs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 48   [00:01:40.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/nrefs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 49   [00:01:41.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 50   [00:01:42.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 51   [00:01:43.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 52   [00:01:44.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 53   [00:01:45.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/nrefs/a.d.ts Text-1 "export class X {}\nexport class A {}"
	/user/username/projects/myproject/b/index.ts Text-1 "import {A} from '@ref/a';\nexport const b = new A();"
	/user/username/projects/myproject/refs/a.d.ts Text-1 "export class X {}\nexport class A {}"
	/user/username/projects/myproject/c/index.ts SVC-1-0 "import {b} from '../b';\nimport {X} from \"@ref/a\";\nb;\nX;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../nrefs/a.d.ts
	  Imported via '@ref/a' from file '../b/index.ts'
	../b/index.ts
	  Imported via '../b' from file 'index.ts'
	../refs/a.d.ts
	  Imported via "@ref/a" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info 54   [00:01:46.000] -----------------------------------------------
Info 55   [00:01:47.000] Running: *ensureProjectForOpenFiles*
Info 56   [00:01:48.000] Before ensureProjectForOpenFiles:
Info 57   [00:01:49.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 57   [00:01:50.000] 	Files (5)

Info 57   [00:01:51.000] -----------------------------------------------
Info 57   [00:01:52.000] Open files: 
Info 57   [00:01:53.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 57   [00:01:54.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
Info 57   [00:01:55.000] After ensureProjectForOpenFiles:
Info 58   [00:01:56.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 58   [00:01:57.000] 	Files (5)

Info 58   [00:01:58.000] -----------------------------------------------
Info 58   [00:01:59.000] Open files: 
Info 58   [00:02:00.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 58   [00:02:01.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
After checking timeout queue length (2) and running

PolledWatches::
/user/username/projects/myproject/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/c/tsconfig.json:
  {}
/user/username/projects/myproject/b/tsconfig.json:
  {}
/user/username/projects/myproject/a/tsconfig.json:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b/index.ts:
  {}
/user/username/projects/myproject/a/index.ts:
  {}
/user/username/projects/myproject/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/nrefs/a.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/c:
  {}
/user/username/projects/myproject/b:
  {}
/user/username/projects/myproject/a:
  {}
/user/username/projects/myproject/refs:
  {}
/user/username/projects/myproject/nrefs: *new*
  {}

Info 58   [00:02:05.000] FileWatcher:: Triggered with /user/username/projects/myproject/b/tsconfig.json 1:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 59   [00:02:06.000] Scheduled: /user/username/projects/myproject/c/tsconfig.json
Info 60   [00:02:07.000] Scheduled: *ensureProjectForOpenFiles*
Info 61   [00:02:08.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b/tsconfig.json 1:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Before checking timeout queue length (2) and running
//// [/user/username/projects/myproject/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"references":[{"path":"../a"}]}


Info 62   [00:02:09.000] Running: /user/username/projects/myproject/c/tsconfig.json
Info 63   [00:02:10.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json
Info 64   [00:02:11.000] Config: /user/username/projects/myproject/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/b/index.ts"
 ],
 "options": {
  "composite": true,
  "baseUrl": "/user/username/projects/myproject/b",
  "paths": {
   "@ref/*": [
    "../*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/b",
  "configFilePath": "/user/username/projects/myproject/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/a",
   "originalPath": "../a"
  }
 ]
}
Info 65   [00:02:12.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 66   [00:02:13.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 67   [00:02:14.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/nrefs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 68   [00:02:15.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/nrefs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 69   [00:02:16.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json Version: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 70   [00:02:17.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 71   [00:02:18.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/a/index.ts Text-1 "export class A {}"
	/user/username/projects/myproject/b/index.ts Text-1 "import {A} from '@ref/a';\nexport const b = new A();"
	/user/username/projects/myproject/refs/a.d.ts Text-1 "export class X {}\nexport class A {}"
	/user/username/projects/myproject/c/index.ts SVC-1-0 "import {b} from '../b';\nimport {X} from \"@ref/a\";\nb;\nX;"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../a/index.ts
	  Imported via '@ref/a' from file '../b/index.ts'
	../b/index.ts
	  Imported via '../b' from file 'index.ts'
	../refs/a.d.ts
	  Imported via "@ref/a" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info 72   [00:02:19.000] -----------------------------------------------
Info 73   [00:02:20.000] Running: *ensureProjectForOpenFiles*
Info 74   [00:02:21.000] Before ensureProjectForOpenFiles:
Info 75   [00:02:22.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 75   [00:02:23.000] 	Files (5)

Info 75   [00:02:24.000] -----------------------------------------------
Info 75   [00:02:25.000] Open files: 
Info 75   [00:02:26.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 75   [00:02:27.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
Info 75   [00:02:28.000] After ensureProjectForOpenFiles:
Info 76   [00:02:29.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 76   [00:02:30.000] 	Files (5)

Info 76   [00:02:31.000] -----------------------------------------------
Info 76   [00:02:32.000] Open files: 
Info 76   [00:02:33.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 76   [00:02:34.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
After checking timeout queue length (2) and running

PolledWatches::
/user/username/projects/myproject/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/c/tsconfig.json:
  {}
/user/username/projects/myproject/b/tsconfig.json:
  {}
/user/username/projects/myproject/a/tsconfig.json:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b/index.ts:
  {}
/user/username/projects/myproject/a/index.ts:
  {}
/user/username/projects/myproject/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/nrefs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/c:
  {}
/user/username/projects/myproject/b:
  {}
/user/username/projects/myproject/a:
  {}
/user/username/projects/myproject/refs:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject/nrefs:
  {}
