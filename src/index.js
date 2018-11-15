import $ from 'jquery'
import URI from 'urijs'

var legacyMode, niceSitename, password, saveToLocalstorage, sitename, updateHash;

Helper = {
  url_val: function(url) {
    return URI(url).domain().toLowerCase();
  },
  sha256_hash: function(password, sitename) {
    var hash, str;
    str = password + ':' + sitename;
    hash = CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
    return hash.substr(0, 3) + '-' + hash.substr(3, 3) + '-' + hash.substr(6, 3) + '-' + hash.substr(9, 3);
  },
  md5_hash: function(password, sitename) {
    var str;
    str = password + ':' + sitename;
    return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex).substr(0, 8);
  }
};

sitename = function() {
  return $('#url-field').val();
};

niceSitename = function() {
  return Helper.url_val(sitename());
};

password = function() {
  return $('#master-password-field').val();
};

updateHash = function() {
  var hasher;
  hasher = legacyMode() ? Helper.md5_hash : Helper.sha256_hash;
  $('#hash-field').val(hasher(password(), niceSitename()));
  if (niceSitename()) {
    return $('#site-hint').html('Generated from ' + niceSitename());
  } else {
    return $('#site-hint').html('Please enter a valid URL');
  }
};

legacyMode = function() {
  return $('#legacyToggle').is(':checked');
};

saveToLocalstorage = function() {
  localStorage.masterpassword = password();
  return localStorage.lastsite = sitename();
};

$('document').ready(function() {
  return $('#master-password-field, #url-field').keyup(function(event) {
    updateHash();
    saveToLocalstorage();
    return false;
  });
});

$('document').ready(function() {
  return $('#legacyToggle').change(function() {
    return updateHash();
  });
});

$('document').ready(function() {
  if (localStorage.masterpassword) {
    $('#master-password-field').val(localStorage.masterpassword);
  }
  if (localStorage.lastsite) {
    $('#url-field').val(localStorage.lastsite);
  }
  return updateHash();
});
