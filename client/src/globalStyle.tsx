import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @font-face {
    font-family: 'Handletter';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SangSangShin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangShin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .notosanskr * { 
     font-family: 'Noto Sans KR', sans-serif;
  }
@font-face {
  font-family: 'Middleschool_student';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Middleschool_student.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mongdol';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Mongdol.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Gomsin';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Gomsin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bareun_hipi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bareun_hipi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Somi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Somi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Gootneaeum';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Gootneaeum.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hana_handwriting';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Hana_handwriting.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Galmetgol';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Galmetgol.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Shy_college_student';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Shy_college_student.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Gothic_Goding';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Gothic_Goding.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SlowSlow';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/SlowSlow.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bumsom';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Bumsom.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mugunghwa';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Mugunghwa.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Daughter_handwriting';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Daughter_handwriting.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Daheng';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Daheng.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Sungsil';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Sungsil.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Pretty_Left_handed';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Pretty_Left_handed.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mago';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Mago.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Anssang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Anssang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Amsterdam';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Amsterdam.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kanginhan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Kanginhan.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Se-hwa';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Se-hwa.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Grandpa_sharing';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Grandpa_sharing.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Beeunhye';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Beeunhye.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Shining_star';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Shining_star.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Polar_Star';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Polar_Star.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Dajin';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Dajin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Rose';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Rose.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Restart';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Restart.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Wild';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Wild.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'My_wife_writing';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/My_wife_writing.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mini_handwriting';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Mini_handwriting.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bujangnim_nunchi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Bujangnim_nunchi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bbang_gunimom';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bbang_gunimom.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'mom_to_daughter';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/mom_to_daughter.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bisang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Bisang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Yuni_ddingddang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Yuni_ddingddang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Fairytale_ddobak';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Fairytale_ddobak.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hyejun';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Hyejun.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'White_angel';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/White_angel.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Se-a';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Se-a.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Korea_hero';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Korea_hero.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mingyung';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Mingyung.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Treegarden';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Treegarden.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Garam';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Garam.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hardworking';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Hardworking.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ainmom';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Ainmom.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Yeonji';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Yunji.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Saying_tobe_strong';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Saying_tobe_strong.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Future_tree';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Future_tree.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Love_son';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Love_son.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ddobakddobak';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Ddobakddobak.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Jayoo';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Jayoo.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Father_loveletter';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Father_loveletter.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Okbi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Okbi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Become_one';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Become_one.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Doing_well';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Doing_well.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Sanghea_chanmi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Sanghea_chanmi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Geumeunbohwa';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Geumeunbohwa.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kimyooyee';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Kimyooyee.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Baby_love';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Baby_love.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Orbit_of_moon';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Orbit_of_moon.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Unggungqui';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Unggungqui.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Mujinjang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Mujinjang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hanyoon';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Hanyoon.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ggeuteumuri';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Ggeuteumuri.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Dot_font';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Dot_font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Syning_19';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Syning_19.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Yammy';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Yammy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ddakdandan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Ddakdandan.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Yedang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Yedang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kangbujang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Kangbujang.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kimjuim';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Kimjuim.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Koreageulggol';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Koreageulggol.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Warm_farewell';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/Warm_farewell.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Newly_married';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_08@1.0/Newly_married.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kyuri_diary';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Kyuri_diary.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'GibbemBalgeum';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/GibbemBalgeum.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Grandma_wring';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Grandma_wring.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hope_nuri';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Hope_nuri.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Meaningful_hanguel';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Meaningful_hanguel.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Fighting_hyonam';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Fighting_hyonam.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'White_kkorisuri';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_11@1.0/White_kkorisuri.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Deagwang_mirror';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Deagwang_mirror.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Firefighter_prayer';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Firefighter_prayer.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Summer_letter';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Summer_letter.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Round_destiny';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Round_destiny.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Jungeun';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Jungeun.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Happy_dobi';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Happy_dobi.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Haram';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Haram.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hardworking_donghee';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Hardworking_donghee.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'I_survive';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/I_survive.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bareun_mental';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bareun_mental.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Father_handwriting';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Father_handwriting.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Chulpil_writing';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Chulpil_writing.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Choding_hope';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Choding_hope.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Love_mom';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Love_mom.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Global_Hangul';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Global_Hangul.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Coco';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Coco.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Dache_love';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Dache_love.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Kalguksu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Kalguksu.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Pride_jiu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Pride_jiu.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Hyukee';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_06@1.0/Hyukee.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Beakeumrye';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Beakeumrye.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Bud_tree';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Bud_tree.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Parkgyunga';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_09@1.0/Parkgyunga.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Flower_tree';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_04@1.0/Flower_tree.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SangSangFlowerRoad';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'KCC-eunyoung';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KCC-eunyoung-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SUIT-Thin';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Thin.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
`;

export default GlobalStyle;
