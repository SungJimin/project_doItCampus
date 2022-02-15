// resumeForm.js
$(function() {
    // 등록 이미지 등록 미리보기
    function readInputFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.imgHere').html("<img src=" + e.target.result + ">");
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".addImg").on('change', function() {
        readInputFile(this);
    });

    // 등록 이미지 삭제 ( input file reset )
    function resetInputFile($input, $preview) {
        var agent = navigator.userAgent.toLowerCase();
        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
            // ie 일때
            $input.replaceWith($input.clone(true));
            $preview.empty();
        } else {
            //other
            $input.val("");
            $preview.empty();
        }
    }

    $(".delImg").click(function(event) {
        var $input = $(".addImg");
        var $preview = $('.imgHere');
        resetInputFile($input, $preview);
    });
    // 이력서 항목별 아이디 부여하기
    // // 학력사항 추가
    // $('.addEduHistory').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var eduIndex = $(".edu_sc_nm").length;
    //     var eduDateId = "stu_app_eduHistory_dt_" + eduIndex;
    //
    //     clone.find('.edu_sc_nm').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_sc_nm');
    //     clone.find('.edu_major').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_major');
    //     clone.find('.edu_gd_ck').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_gd_ck');
    //     clone.find('.edu_gd_dt').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_gd_dt');
    //     clone.find('.edu_sc_lo').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_sc_lo');
    //     clone.find('.edu_gd_rq').attr('name', 'eduHistoryList['+eduIndex+'].stu_app_edu_gd_rq');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     $("#" + eduDateId).datepicker();
    //     // 복제된 div에 각각 ID부여해서 컨트롤 해야합니다.
    // });
    //
    // // 경력사항 추가
    // $('.addCareer').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var careerIndex = $(".crr_place").length;
    //     var crrFrmId = "stu_app_crr_frm_" + crrIndex;
    //   var crrEndId = "stu_app_crr_end_" + crrIndex;
    //
    //     clone.find('.crr_place').attr('name', 'careerList['+careerIndex+'].stu_app_crr_place');
    //     clone.find('.crr_dept').attr('name', 'careerList['+careerIndex+'].stu_app_crr_dept');
    //     clone.find('.crr_position').attr('name', 'careerList['+careerIndex+'].stu_app_crr_position');
    //     clone.find('.crr_phone').attr('name', 'careerList['+careerIndex+'].stu_app_crr_phone');
    //     clone.find('.crr_st').attr('name', 'careerList['+careerIndex+'].stu_app_crr_st');
    //     clone.find('.crr_et').attr('name', 'careerList['+careerIndex+'].stu_app_crr_et');
    //     clone.find('.crr_description').attr('name', 'careerList['+careerIndex+'].stu_app_crr_description');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     minMax(crrFrmId, crrEndId);
    // });
    //
    // // 교육이수 경력 추가
    // $('.addStudy').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var studyIndex = $(".study_nm").length;
    //     var studyFrmId = "stu_app_study_frm_" + studyIndex;
    //     var studyEndId = "stu_app_study_end_" + studyIndex;
    //
    //     clone.find('.study_nm').attr('name', 'studyList['+studyIndex+'].stu_app_study_nm');
    //     clone.find('.study_st').attr('name', 'studyList['+studyIndex+'].stu_app_study_st');
    //     clone.find('.study_et').attr('name', 'studyList['+studyIndex+'].stu_app_study_et');
    //     clone.find('.study_ag').attr('name', 'studyList['+studyIndex+'].stu_app_study_ag');
    //     clone.find('.study_detail').attr('name', 'studyList['+studyIndex+'].stu_app_study_detail');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     minMax(studyFrmId, studyEndId);
    // });
    //
    // // 언어능력 추가
    // $('.addLang').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var langIndex = $(".lang_nm").length;
    //     var langDateId = "stu_app_lang_dt_" + langIndex
    //
    //     clone.find('.lang_nm').attr('name', 'langList['+langIndex+'].stu_app_lang_nm');
    //     clone.find('.lang_test_nm').attr('name', 'langList['+langIndex+'].stu_app_lang_test_nm');
    //     clone.find('.lang_grade').attr('name', 'langList['+langIndex+'].stu_app_lang_grade');
    //     clone.find('.lang_ag').attr('name', 'langList['+langIndex+'].stu_app_lang_ag');
    //     clone.find('.lang_obtain_dt').attr('name', 'langList['+langIndex+'].stu_app_lang_obtain_dt');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     ("#" + langDateId).datepicker();
    // });
    //
    // // 자격증 추가
    // $('.addLicense').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var licenseIndex = $(".license_nm").length;
    //     var licenseDateId = "stu_app_license_dt_" + licenseIndex
    //
    //     clone.find('.license_nm').attr('name', 'licenseList['+licenseIndex+'].stu_app_license_nm');
    //     clone.find('.license_grade').attr('name', 'licenseList['+licenseIndex+'].stu_app_license_grade');
    //     clone.find('.license_ag').attr('name', 'licenseList['+licenseIndex+'].stu_app_license_ag');
    //     clone.find('.license_obtain_dt').attr('name', 'licenseList['+licenseIndex+'].stu_app_license_obtain_dt');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     ("#" + licenseDateId).datepicker();
    // });
    //
    // // 본 과정 응시여부  추가
    // $('.addSes').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var sesIndex = $(".ses_ck").length;
    //     var sesDateId = "stu_app_ses_dt_" + sesIndex
    //
    //     clone.find('.ses_ck').attr('name', 'sesList['+sesIndex+'].stu_app_ses_ck');
    //     clone.find('.ses_dt').attr('name', 'sesList['+sesIndex+'].stu_app_ses_apply_dt');
    //     clone.find('.ses_rt').attr('name', 'sesList['+sesIndex+'].stu_app_ses_apply_rt');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     ("#" + sesDateId).datepicker();
    // });
    //
    // // Kmove스쿨 참여여부  추가
    // $('.addKmove').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var kmoveIndex = $(".kmove_ck").length;
    //     var kmoveFrmId = "stu_app_kmove_frm_" + kmoveIndex;
    //     var kmoveEndId = "stu_app_kmove_end_" + kmoveIndex;
    //
    //     clone.find('.kmove_ck').attr('name', 'kmoveList['+kmoveIndex+'].stu_app_kmove_ck');
    //     clone.find('.kmove_nm').attr('name', 'kmoveList['+kmoveIndex+'].stu_app_kmove_nm');
    //     clone.find('.kmove_ag').attr('name', 'kmoveList['+kmoveIndex+'].stu_app_kmove_ag');
    //     clone.find('.kmove_st').attr('name', 'kmoveList['+kmoveIndex+'].stu_app_kmove_st');
    //     clone.find('.kmove_et').attr('name', 'kmoveList['+kmoveIndex+'].stu_app_kmove_et');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     minMax(kmoveFrmId, kmoveEndId);
    // });
    //
    // // 해외체류경험  추가
    // $('.addOverseas').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var overseasIndex = $(".kmove_ck").length;
    //     var overseasFrmId = "stu_app_overseas_frm_" + overseasIndex;
    //     var overseasEndId = "stu_app_overseas_end_" + overseasIndex;
    //
    //     clone.find('.overseas_ck').attr('name', 'overseasList['+overseasIndex+'].stu_app_overseas_ck');
    //     clone.find('.overseas_nm').attr('name', 'overseasList['+overseasIndex+'].stu_app_overseas_nm');
    //     clone.find('.overseas_st').attr('name', 'overseasList['+overseasIndex+'].stu_app_overseas_st');
    //     clone.find('.overseas_et').attr('name', 'overseasList['+overseasIndex+'].stu_app_overseas_et');
    //     clone.find('.overseas_purpose').attr('name', 'overseasList['+overseasIndex+'].stu_app_overseas_purpose');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    //     minMax(overseasFrmId, overseasEndId);
    // });
    //
    // // 자기소개서  추가
    // $('.addIntroduce').click(function() {
    //     var clone = $(this).parent().find('.resumeFormWrapper').eq(0).clone(true).addClass('resumeForm_addStyle');
    //     var IntroduceIndex = $(".ses_ck").length;
    //
    //     clone.find('.Introduce_title').attr('name', 'IntroduceList['+IntroduceIndex+'].stu_app_Introduce_title');
    //     clone.find('.Introduce_detail').attr('name', 'IntroduceList['+IntroduceIndex+'].stu_app_Introduce_detail');
    //     clone.find('.rsm_input').val('');
    //
    //     clone.appendTo($(this).siblings('.resumeFormContainer'));
    // });
    //
    // 이력서 항목 추가
    $('.resumeForm_addBtn').click(function() {
        var $wrapper = $(this).parent().find('.resumeFormWrapper');
        var wrapperDp = $wrapper.css("display");

        if(wrapperDp == 'none'){
            $wrapper.css("display","block");
        }else{
            var clone = $wrapper.eq(0).clone(true);

            clone.find('.rsm_input').val('');
            clone.appendTo($(this).siblings('.resumeFormContainer'));
        }
    });

    // 이력서 항목 삭제
    $('.resumeForm_delBtn').click(function() {
        var $wrapper = $(this).parents('.resumeFormContainer').children();
        var leng = $wrapper.length;
        var necessary = $wrapper.hasClass('necessary');

        if (leng == 1) {
            var wrapperDp = $wrapper.css("display");
            if(necessary == true){
                var rsmTitle = $(this).parents('.resumeSection').prev().children('.h3').html();

                alert(rsmTitle + '은(는) 필수 입력항목이므로 반드시 입력 하여 주시기 바랍니다.');
            }else if(necessary == false && wrapperDp == "block"){
                var result = confirm('정말 삭제하시겠습니까? 입력하신 내용은 모두 삭제됩니다.');
                if(result){
                    $(this).parent('.resumeFormWrapper').hide();
                };
            }

        } else if(leng > 1){
            var result = confirm('정말 삭제하시겠습니까? 입력하신 내용은 모두 삭제됩니다.');
            if(result){
                $(this).parent('.resumeFormWrapper').remove();
            };
        }

    });

    // 증빙자료 업로드_첨부파일 명 표시
    for (var i = 1; i < 10; i++) {
        var str = "resumeEvidence" + i;

        document.getElementById(str).onchange = function() {
            var text = this.id + "_url";
            document.getElementById(text).value = this.value.replace(/C:\\fakepath\\/i, '');
        };
    }

    // 증빙자료 업로드 안내문
    $('.resumeForm_ntcBtn').click(function() {
        var notice = $(this).prev();
        var dp = $(this).prev().css('display');
        console.log(dp);
        if (dp == "none") {
            notice.show();
            $(this).removeClass('question-circle').addClass('times-circle');
        } else {
            notice.hide();
            $(this).removeClass('times-circle').addClass('question-circle');
        }
    });

    // 지원서 항목 resume Aside Nav
    $('.resumeNav_add').click(function() {
        var link = $(this).prev().find('a').attr('href');
        var wrapDp = $(link).css('display');

        if (wrapDp == "none") {
            $(this).removeClass('plus-circle-gray').addClass('minus-circle-navy').prev().find('.navTxt').css('color', '#11283b');
            $(this).prev().find('.img-icon').addClass('iconHover');
            $(link).css("display", "block");
        } else {
            $(this).removeClass('minus-circle-navy').addClass('plus-circle-gray').prev().find('.navTxt').css('color', '#9b9ea0');
            $(this).prev().find('.img-icon').removeClass('iconHover');
            $(link).css("display", "none");
        }
    });

    // 지원하기
    $('.resumeBtn').click(function() {
        var result = confirm('지원하시겠습니까? 지원기간 중에는 언제든 수정이 가능합니다.');
        if (result) {
            confirm('지원완료되었습니다. 마이페이지로 이동합니다.')
            // 마이페이지로 이동
        };
    });
});
