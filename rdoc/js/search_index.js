var search_data = {"index":{"searchIndex":["flickr","config","group","photo","photocollection","photoset","user","[]()","add_note()","add_tag()","contacts()","contactsphotos()","context()","dates=()","deletenote()","description()","description=()","editnote()","exif()","favorites()","file()","filename()","find_by_url()","get()","getinfo()","getinfo()","getphotos()","get_token_from()","groups()","groups()","http_get()","isfavorite()","license()","licenses()","load_from_file()","login_url()","method_missing()","new()","new()","new()","new()","new()","new()","normalize_size()","notes()","owner()","parse_in_rails_env!()","parsed?()","permissions()","perms=()","photos()","photos()","photos_request()","photos_search()","photoset()","photosets()","popular_tags()","posttoblog()","pretty_url()","pretty_url()","recent()","related_tags()","remove_tag()","request()","request_url()","rotate()","rotation()","search()","server()","set_up_configuration()","signature_from()","size_url()","sizes()","source()","tag()","tag()","tags()","tags()","tags=()","title=()","to_s()","to_s()","url()","username()","users()","readme"],"longSearchIndex":["flickr","flickr::config","flickr::group","flickr::photo","flickr::photocollection","flickr::photoset","flickr::user","flickr::photo#[]()","flickr::photo#add_note()","flickr::photo#add_tag()","flickr::user#contacts()","flickr::user#contactsphotos()","flickr::photo#context()","flickr::photo#dates=()","flickr::photo#deletenote()","flickr::photo#description()","flickr::photo#description=()","flickr::photo#editnote()","flickr::photo#exif()","flickr::user#favorites()","flickr::photo#file()","flickr::photo#filename()","flickr#find_by_url()","flickr::config::get()","flickr::group#getinfo()","flickr::photoset#getinfo()","flickr::photoset#getphotos()","flickr#get_token_from()","flickr#groups()","flickr::user#groups()","flickr#http_get()","flickr::photo#isfavorite()","flickr::photo#license()","flickr#licenses()","flickr::config::load_from_file()","flickr#login_url()","flickr#method_missing()","flickr::new()","flickr::group::new()","flickr::photo::new()","flickr::photocollection::new()","flickr::photoset::new()","flickr::user::new()","flickr::photo#normalize_size()","flickr::photo#notes()","flickr::photo#owner()","flickr::config::parse_in_rails_env!()","flickr::config::parsed?()","flickr::photo#permissions()","flickr::photo#perms=()","flickr#photos()","flickr::user#photos()","flickr#photos_request()","flickr#photos_search()","flickr#photoset()","flickr::user#photosets()","flickr::user#popular_tags()","flickr::photo#posttoblog()","flickr::photo#pretty_url()","flickr::user#pretty_url()","flickr#recent()","flickr#related_tags()","flickr::photo#remove_tag()","flickr#request()","flickr#request_url()","flickr::photo#rotate()","flickr::photo#rotation()","flickr#search()","flickr::photo#server()","flickr#set_up_configuration()","flickr#signature_from()","flickr::photo#size_url()","flickr::photo#sizes()","flickr::photo#source()","flickr#tag()","flickr::user#tag()","flickr::photo#tags()","flickr::user#tags()","flickr::photo#tags=()","flickr::photo#title=()","flickr::photo#to_s()","flickr::user#to_s()","flickr::photo#url()","flickr::user#username()","flickr#users()",""],"info":[["Flickr","","Flickr.html","","<p>Flickr client class. Requires an API key\n"],["Flickr::Config","","Flickr/Config.html","","<p>This class supports external configuration\n"],["Flickr::Group","","Flickr/Group.html","","<p>Todo: flickr.groups.pools.add flickr.groups.pools.getContext\nflickr.groups.pools.getGroups flickr.groups.pools.getPhotos …\n"],["Flickr::Photo","","Flickr/Photo.html","",""],["Flickr::PhotoCollection","","Flickr/PhotoCollection.html","","<p>A collection of photos is returned as a PhotoCollection, a subclass of\nArray. This allows us to retain …\n"],["Flickr::Photoset","","Flickr/Photoset.html","","<p>Todo: flickr.photosets.delete flickr.photosets.editMeta\nflickr.photosets.editPhotos flickr.photosets.getContext …\n"],["Flickr::User","","Flickr/User.html","","<p>Todo: logged_in? if logged in: flickr.blogs.getList flickr.favorites.add\nflickr.favorites.remove flickr.groups.browse …\n"],["[]","Flickr::Photo","Flickr/Photo.html#method-i-5B-5D","(param_name)","<p>Allows access to all photos instance variables through hash like interface,\ne.g. photo returns @datetaken …\n"],["add_note","Flickr::Photo","Flickr/Photo.html#method-i-add_note","(note)","<p>Implements flickr.photos.notes.add\n"],["add_tag","Flickr::Photo","Flickr/Photo.html#method-i-add_tag","(tag)","<p>Implements flickr.photos.addTags\n"],["contacts","Flickr::User","Flickr/User.html#method-i-contacts","()","<p>Implements flickr.contacts.getPublicList and flickr.contacts.getList\n"],["contactsPhotos","Flickr::User","Flickr/User.html#method-i-contactsPhotos","()","<p>Implements flickr.photos.getContactsPublicPhotos and\nflickr.photos.getContactsPhotos\n"],["context","Flickr::Photo","Flickr/Photo.html#method-i-context","()","<p>Implements flickr.photos.getContext\n"],["dates=","Flickr::Photo","Flickr/Photo.html#method-i-dates-3D","(dates)","<p>Implements flickr.photos.setDates\n"],["deleteNote","Flickr::Photo","Flickr/Photo.html#method-i-deleteNote","(note_id)","<p>Implements flickr.photos.notes.delete\n"],["description","Flickr::Photo","Flickr/Photo.html#method-i-description","()",""],["description=","Flickr::Photo","Flickr/Photo.html#method-i-description-3D","(title)",""],["editNote","Flickr::Photo","Flickr/Photo.html#method-i-editNote","(note_id)","<p>Implements flickr.photos.notes.edit\n"],["exif","Flickr::Photo","Flickr/Photo.html#method-i-exif","()","<p>Implements flickr.photos.getExif\n"],["favorites","Flickr::User","Flickr/User.html#method-i-favorites","()","<p>Implements flickr.favorites.getPublicList\n"],["file","Flickr::Photo","Flickr/Photo.html#method-i-file","(size='Medium')","<p>Returns the photo file data itself, in any specified size. Example:\nFile.open(photo.title, &#39;w&#39;) …\n"],["filename","Flickr::Photo","Flickr/Photo.html#method-i-filename","()","<p>Unique filename for the image, based on the Flickr NSID\n"],["find_by_url","Flickr","Flickr.html#method-i-find_by_url","(url)","<p>Implements flickr.urls.lookupGroup and flickr.urls.lookupUser\n"],["get","Flickr::Config","Flickr/Config.html#method-c-get","()","<p>Returns configuration Hash\n"],["getInfo","Flickr::Group","Flickr/Group.html#method-i-getInfo","()","<p>Implements flickr.groups.getInfo and flickr.urls.getGroup private, once we\ncan call it as needed\n"],["getInfo","Flickr::Photoset","Flickr/Photoset.html#method-i-getInfo","()","<p>Implements flickr.photosets.getInfo private, once we can call it as needed\n"],["getPhotos","Flickr::Photoset","Flickr/Photoset.html#method-i-getPhotos","()",""],["get_token_from","Flickr","Flickr.html#method-i-get_token_from","(frob)","<p>Gets authentication token given a Flickr frob, which is returned when user\nallows access to their account …\n"],["groups","Flickr","Flickr.html#method-i-groups","(group_name, options={})","<p>Implements flickr.groups.search\n"],["groups","Flickr::User","Flickr/User.html#method-i-groups","()","<p>Implements flickr.people.getPublicGroups\n"],["http_get","Flickr","Flickr.html#method-i-http_get","(url)","<p>Does an HTTP GET on a given URL and returns the response body\n"],["isfavorite","Flickr::Photo","Flickr/Photo.html#method-i-isfavorite","()",""],["license","Flickr::Photo","Flickr/Photo.html#method-i-license","()",""],["licenses","Flickr","Flickr.html#method-i-licenses","()","<p>Implements flickr.photos.licenses.getInfo\n"],["load_from_file","Flickr::Config","Flickr/Config.html#method-c-load_from_file","(file)","<p>parses file and prepare @@configuration for access from outside to fetch\nconfiguration hash\n"],["login_url","Flickr","Flickr.html#method-i-login_url","(perms)","<p>Returns url for user to login in to Flickr to authenticate app for a user\n"],["method_missing","Flickr","Flickr.html#method-i-method_missing","(method_id, params={})","<p>Implements everything else. Any method not defined explicitly will be\npassed on to the Flickr API, and …\n"],["new","Flickr","Flickr.html#method-c-new","(api_key_or_params={})","<p>To use the Flickr API you need an api key (see\nwww.flickr.com/services/api/misc.api_keys.html), and the …\n"],["new","Flickr::Group","Flickr/Group.html#method-c-new","(id_or_params_hash=nil, api_key={})",""],["new","Flickr::Photo","Flickr/Photo.html#method-c-new","(id=nil, api_key={}, extra_params={})",""],["new","Flickr::PhotoCollection","Flickr/PhotoCollection.html#method-c-new","(photos_api_response={}, api_key={})","<p>builds a PhotoCollection from given params, such as those returned from\nphotos.search API call. Note …\n"],["new","Flickr::Photoset","Flickr/Photoset.html#method-c-new","(id=nil, api_key={})",""],["new","Flickr::User","Flickr/User.html#method-c-new","(id_or_params_hash=nil, username=nil, email=nil, password=nil, api_key={})","<p>A Flickr::User can be instantiated in two ways. The old (deprecated) method\nis with an ordered series …\n"],["normalize_size","Flickr::Photo","Flickr/Photo.html#method-i-normalize_size","(size)","<p>converts string or symbol size to a capitalized string\n"],["notes","Flickr::Photo","Flickr/Photo.html#method-i-notes","()",""],["owner","Flickr::Photo","Flickr/Photo.html#method-i-owner","()","<p>Returns the owner of the photo as a Flickr::User. If we have no info about\nthe owner, we make an API …\n"],["parse_in_rails_env!","Flickr::Config","Flickr/Config.html#method-c-parse_in_rails_env-21","()","<p>Excludes specific configuration for choosed environment in Rails\n"],["parsed?","Flickr::Config","Flickr/Config.html#method-c-parsed-3F","()","<p>Returns true if configuration has been parsed\n"],["permissions","Flickr::Photo","Flickr/Photo.html#method-i-permissions","()","<p>Implements flickr.photos.getPerms\n"],["perms=","Flickr::Photo","Flickr/Photo.html#method-i-perms-3D","(perms)","<p>Implements flickr.photos.setPerms\n"],["photos","Flickr","Flickr.html#method-i-photos","(*criteria)","<p>Implements flickr.photos.getRecent and flickr.photos.search\n"],["photos","Flickr::User","Flickr/User.html#method-i-photos","(options={})","<p>Implements flickr.people.getPublicPhotos. Options hash allows you to add\nextra restrictions as per flickr.people.getPublicPhotos …\n"],["photos_request","Flickr","Flickr.html#method-i-photos_request","(method, params={})","<p>acts like request but returns a PhotoCollection (a list of Photo objects)\n"],["photos_search","Flickr","Flickr.html#method-i-photos_search","(params={})",""],["photoset","Flickr","Flickr.html#method-i-photoset","(photoset_id)",""],["photosets","Flickr::User","Flickr/User.html#method-i-photosets","()","<p>Implements flickr.photosets.getList\n"],["popular_tags","Flickr::User","Flickr/User.html#method-i-popular_tags","(count = 10)","<p>Implements flickr.tags.getListUserPopular\n"],["postToBlog","Flickr::Photo","Flickr/Photo.html#method-i-postToBlog","(blog_id, title='', description='')","<p>Implements flickr.blogs.postPhoto\n"],["pretty_url","Flickr::Photo","Flickr/Photo.html#method-i-pretty_url","()","<p>the &#39;pretty&#39; url for a photo (if the user has set up a custom name)\neg, flickr.com/photos/granth/2584402507 …\n"],["pretty_url","Flickr::User","Flickr/User.html#method-i-pretty_url","()",""],["recent","Flickr","Flickr.html#method-i-recent","()","<p>flickr.photos.getRecent 100 newest photos from everyone\n"],["related_tags","Flickr","Flickr.html#method-i-related_tags","(tag)","<p>Implements flickr.tags.getRelated\n"],["remove_tag","Flickr::Photo","Flickr/Photo.html#method-i-remove_tag","(tag)","<p>Implements flickr.photos.removeTag\n"],["request","Flickr","Flickr.html#method-i-request","(method, params={})","<p>Takes a Flickr API method name and set of parameters; returns an XmlSimple\nobject with the response\n"],["request_url","Flickr","Flickr.html#method-i-request_url","(method, params={})","<p>Builds url for Flickr API REST request from given the flickr method name\n(exclusing the &#39;flickr.&#39; …\n"],["rotate","Flickr::Photo","Flickr/Photo.html#method-i-rotate","()","<p>Implements flickr.photos.transform.rotate\n"],["rotation","Flickr::Photo","Flickr/Photo.html#method-i-rotation","()",""],["search","Flickr","Flickr.html#method-i-search","(params={})",""],["server","Flickr::Photo","Flickr/Photo.html#method-i-server","()",""],["set_up_configuration","Flickr","Flickr.html#method-i-set_up_configuration","(api_key_or_params = {})",""],["signature_from","Flickr","Flickr.html#method-i-signature_from","(params={})",""],["size_url","Flickr::Photo","Flickr/Photo.html#method-i-size_url","(size='Medium')","<p>Returns the URL for the photo size page defaults to &#39;Medium&#39; other\nvalid sizes are in the VALID_SIZES …\n"],["sizes","Flickr::Photo","Flickr/Photo.html#method-i-sizes","(size=nil)","<p>Implements flickr.photos.getSizes\n"],["source","Flickr::Photo","Flickr/Photo.html#method-i-source","(size='Medium')","<p>Returns the URL for the image (default or any specified size)\n"],["tag","Flickr","Flickr.html#method-i-tag","(tag)","<p>Gets public photos with a given tag\n"],["tag","Flickr::User","Flickr/User.html#method-i-tag","(tag)","<p>Gets photos with a given tag\n"],["tags","Flickr::Photo","Flickr/Photo.html#method-i-tags","()","<p>flickr.tags.getListPhoto\n"],["tags","Flickr::User","Flickr/User.html#method-i-tags","()","<p>Implements flickr.tags.getListUser\n"],["tags=","Flickr::Photo","Flickr/Photo.html#method-i-tags-3D","(tags)","<p>Implements flickr.photos.setTags\n"],["title=","Flickr::Photo","Flickr/Photo.html#method-i-title-3D","(title)","<p>Implements flickr.photos.setMeta\n"],["to_s","Flickr::Photo","Flickr/Photo.html#method-i-to_s","()","<p>Converts the Photo to a string by returning its title\n"],["to_s","Flickr::User","Flickr/User.html#method-i-to_s","()",""],["url","Flickr::Photo","Flickr/Photo.html#method-i-url","(size = nil)","<p>the URL for the main photo page if getInfo has already been called, this\nwill return the pretty url\n<p>for …\n"],["username","Flickr::User","Flickr/User.html#method-i-username","()",""],["users","Flickr","Flickr.html#method-i-users","(lookup=nil)","<p>Implements flickr.people.findByEmail and flickr.people.findByUsername.\n"],["README","","README_txt.html","","<p>flickr\n<p>github.com/RaVbaker/flickr\n<p>DESCRIPTION:\n"]]}}