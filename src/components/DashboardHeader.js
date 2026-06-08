import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { DrawerActions } from '@react-navigation/native';
import styles from '../styles/DashboardHeader.styles';

const RAIO = 58;
const CIRC = 2 * Math.PI * RAIO;

export default function DashboardHeader({ navigation, curso, cursoKey, open, setOpen, CURSOS, setCursoKey }) {
  const aprovadas = curso.aprovadas || 0;
  const meta = curso.meta || 1;
  const offset = CIRC - (aprovadas / meta) * CIRC;

  return (
    <>
      <View style={styles.header}>

        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons name="menu-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.navTitle}>HourSync</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Pill do curso selecionado — só aparece se tiver mais de 1 curso */}
        {Object.keys(CURSOS).length > 1 && (
          <TouchableOpacity style={styles.coursePill} onPress={() => setOpen(!open)}>
            <Text style={styles.coursePillText} numberOfLines={1}>{curso.nome}</Text>
            <Ionicons
              name={open ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={14} color="#fff"
            />
          </TouchableOpacity>
        )}

        {Object.keys(CURSOS).length === 1 && (
          <View style={styles.coursePill}>
            <Text style={styles.coursePillText} numberOfLines={1}>{curso.nome}</Text>
          </View>
        )}

        <View style={styles.ringWrap}>
          <Svg width={150} height={150} viewBox="0 0 150 150">
            <Circle cx={75} cy={75} r={RAIO} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={12} />
            <Circle
              cx={75} cy={75} r={RAIO}
              fill="none" stroke="#fff" strokeWidth={12}
              strokeDasharray={`${CIRC}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              rotation={-90} origin="75,75"
            />
          </Svg>
          <View style={styles.ringCenter}>
            <Text style={styles.ringValue}>{aprovadas}H</Text>
            <Text style={styles.ringTotal}>/{meta}h</Text>
          </View>
        </View>

      </View>

      {/* Dropdown de cursos — só aparece se tiver mais de 1 curso */}
      {open && Object.keys(CURSOS).length > 1 && (
        <View style={styles.dropdown}>
          {Object.entries(CURSOS).map(([key, c], index) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.dropdownItem,
                index < Object.keys(CURSOS).length - 1 && styles.dropdownBorder,
              ]}
              onPress={() => { setCursoKey(key); setOpen(false); }}
            >
              <Text style={[styles.dropdownText, cursoKey === key && styles.dropdownTextActive]}>
                {c.nome}
              </Text>
              {cursoKey === key && <Ionicons name="checkmark" size={16} color="#fff" />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}
