(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5315],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return u}});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=l,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return a?t.createElement(f,o(o({ref:n},p),{},{components:a})):t.createElement(f,o({ref:n},p))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3899:function(e,n,a){"use strict";a.d(n,{Z:function(){return c},T:function(){return s}});var t=a(2122),l=a(7294),r=a(6742),o=a(2263),i=a(907);function c(e){return l.createElement(r.Z,(0,t.Z)({},e,{to:(n=e.to,c=(0,i.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==c?void 0:c.name)?a:"current"]+n),target:"_blank"}));var n,a,c}function s(e){var n,a=null!=(n=e.text)?n:"Example";return l.createElement(c,e,l.createElement("span",null,"\xa0"),l.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example"}))}},6892:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var t=a(2122),l=a(9756),r=(a(7294),a(3905)),o=a(3899),i=["components"],c={id:"callbacks",title:"Callbacks",sidebar_label:"Callbacks"},s=void 0,p={unversionedId:"experimental/callbacks",id:"version-1.1/experimental/callbacks",isDocsHomePage:!1,title:"Callbacks",description:"The Callback interface enables custom",source:"@site/versioned_docs/version-1.1/experimental/callbacks.md",sourceDirName:"experimental",slug:"/experimental/callbacks",permalink:"/docs/experimental/callbacks",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/experimental/callbacks.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1625003365,formattedLastUpdatedAt:"6/29/2021",frontMatter:{id:"callbacks",title:"Callbacks",sidebar_label:"Callbacks"},sidebar:"version-1.1/docs",previous:{title:"Introduction",permalink:"/docs/experimental/intro"},next:{title:"Developer Guide Overview",permalink:"/docs/development/overview"}},d=[{value:"Configure Callback",id:"configure-callback",children:[]},{value:"Callback ordering",id:"callback-ordering",children:[]}],m={toc:d};function u(e){var n=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)(o.Z,{to:"hydra/experimental/callback.py",mdxType:"GithubLink"},"Callback interface")," enables custom\ncode to be triggered by various Hydra events."),(0,r.kt)("p",null,"To use the callback API, one should import Hydra's ",(0,r.kt)("inlineCode",{parentName:"p"},"Callback")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from hydra.experimental.callback import Callback\n")),(0,r.kt)("p",null,"Users can then create subclasses of this ",(0,r.kt)("inlineCode",{parentName:"p"},"Callback")," class, overriding one or more of\nthe methods defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"Callback"),". For the methods of a subclass to be called at the\nappropriate time, the subclass must be registered with Hydra in the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.callbacks")," config\n(see examples below)."),(0,r.kt)("p",null,"The full API exposed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.experimental.callback.Callback")," class is listed below:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Events supported (Click to expand)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Callback:\n    def on_run_start(self, config: DictConfig, **kwargs: Any) -> None:\n        """\n        Called in RUN mode before job starts.\n        """\n        ...\n\n    def on_run_end(self, config: DictConfig, **kwargs: Any) -> None:\n        """\n        Called in RUN mode after job ends.\n        """\n        ...\n\n    def on_multirun_start(self, config: DictConfig, **kwargs: Any) -> None:\n        """\n        Called in MULTIRUN mode before any job starts.\n        """\n        ...\n\n    def on_multirun_end(self, config: DictConfig, **kwargs: Any) -> None:\n        """\n        Called in MULTIRUN mode after all jobs end.\n        """\n        ...\n\n    def on_job_start(self, config: DictConfig, **kwargs: Any) -> None:\n        """\n        Called in both RUN and MULTIRUN modes, once for each Hydra job (before running\n        application code).\n        """\n        ...\n\n    def on_job_end(\n        self, config: DictConfig, job_return: JobReturn, **kwargs: Any\n    ) -> None:\n        """\n        Called in both RUN and MULTIRUN modes, once for each Hydra job (after running\n        application code).\n        """\n        ...\n\n'))),(0,r.kt)("h3",{id:"configure-callback"},"Configure Callback"),(0,r.kt)("p",null,"Say we have ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCallback")," so after every job ends we can upload a certain file to a S3 bucket.\nFor simplicity we include this Callback class within the application, in real life you should have the\nCallback in a separate file.\nRunning the application, we can see our custom method ",(0,r.kt)("inlineCode",{parentName:"p"},"on_job_end")," was called."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--9"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'class MyCallback(Callback):\n   def __init__(self, bucket: str, file_path: str) -> None:\n        self.bucket = bucket\n        self.file_path = file_path\n\n   def on_job_end(self, config: DictConfig, **kwargs: Any) -> None:\n        print(f"Job ended,uploading...")\n        # uploading...\n\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n'))),(0,r.kt)("div",{className:"col col--3"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="output"',title:'"output"'},"\n$ python  my_app.py\nfoo: bar\n\nJob ended,uploading...\n\n\n\n\n\n\n\n\n\n\n\n")))),(0,r.kt)("p",null,"Now let's take a look at the configurations. "),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="$ tree conf"',title:'"$',tree:!0,'conf"':!0},"conf\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 hydra\n    \u2514\u2500\u2500 callbacks\n        \u2514\u2500\u2500 my_callback.yaml\n\n\n"))),(0,r.kt)("div",{className:"col  col--3"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"defaults:\n - /hydra/callbacks:\n    - my_callback\n\nfoo: bar\n\n\n"))),(0,r.kt)("div",{className:"col  col--5"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="conf/hydra/callbacks/my_callback.yaml"',title:'"conf/hydra/callbacks/my_callback.yaml"'},"# @package _global_\nhydra:\n  callbacks:\n    my_callback:\n      _target_: my_app.MyCallback\n      bucket: my_s3_bucket\n      file_path: ./test.pt\n")))),(0,r.kt)("h3",{id:"callback-ordering"},"Callback ordering"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"on_run_start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"on_multirun_start")," method will get called first,\nfollowed by ",(0,r.kt)("inlineCode",{parentName:"p"},"on_job_start")," (called once for each job).\nAfter each job ",(0,r.kt)("inlineCode",{parentName:"p"},"on_job_end")," is called, and finally either ",(0,r.kt)("inlineCode",{parentName:"p"},"on_run_end")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"on_multirun_end")," is called one time before the application exits."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.callbacks")," section of your config, you can use a list to register multiple callbacks. They will be called in the final composed order for ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," events and\nin reversed order for ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," events. So, for example, suppose we have the following composed config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-commandline",metastring:'title="python my_app.py --cfg hydra -p hydra.callbacks"',title:'"python',"my_app.py":!0,"--cfg":!0,hydra:!0,"-p":!0,'hydra.callbacks"':!0},"# @package hydra.callbacks\nmy_callback1:\n  _target_: my_app.MyCallback1\n  param1: val1\nmy_callback2:\n  _target_: my_app.MyCallback2\n  param2: val2\n")),(0,r.kt)("p",null,"Before each job starts, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCallback1.on_job_start")," will get called first,\nfollowed by ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCallback2.on_job_start"),".\nAfter each job ends, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCallback2.on_job_end")," will get called first,\nfollowed by ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCallback1.on_job_end"),"."))}u.isMDXComponent=!0}}]);